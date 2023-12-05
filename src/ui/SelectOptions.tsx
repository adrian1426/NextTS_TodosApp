import { Select } from 'antd';

interface SelectOptionsProps {
  placeholder: string;
  onChange: (value: string) => void,
  options: { value: string; label: string; }[]
}

const SelectOptions = (props: SelectOptionsProps) => {
  const { placeholder, onChange, options } = props;

  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      style={{ width: "30%" }}
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={filterOption}
      options={options}
    />
  );
};

export default SelectOptions;