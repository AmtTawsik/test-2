
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
const items = [
  {
    label: <Link href="/categories/cpu">CPU / Processor</Link>,
    key: '0',
  },
  {
    label: <Link href="/categories/motherboard">Motherboard</Link>,
    key: '1',
  },
  {
    label: <Link href="/categories/ram">RAM</Link>,
    key: '2',
  },
  {

    label: <Link href="/categories/psu">Power Supply Unit</Link>,
    key: '3',
  },
  {

    label: <Link href="/categories/storage">Storage Device</Link>,
    key: '4',
  },
  {

    label: <Link href="/categories/monitor">Monitor</Link>,
    key: '5',
  },
  {

    label: <Link href="/categories/others">Others</Link>,
    key: '6',
  },
];
const DropdownComponent = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <button className='text-white hover:bg-blue-600 bg-none py-2 px-5 border border-teal-500 rounded-lg' onClick={(e) => e.preventDefault()}>
      <Space>
        Catagoris
        <DownOutlined />
      </Space>
    </button>
  </Dropdown>
);
export default DropdownComponent;