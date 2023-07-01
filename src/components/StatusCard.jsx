import { Button, Text } from 'native-base';


export function StatusCard({ title, isActive = false,type,  ...rest }) {

  const colorType = type === 'open' ? "#FBA94C" : "#04D361";

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="#202024"
      color
      flex={1}
      size="sm"
      {...rest}
    >
      <Text color={isActive ? colorType : "#7C7C8A"} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
}

