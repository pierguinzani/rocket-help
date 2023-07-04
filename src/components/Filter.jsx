
import { Text,Button} from 'native-base';

export function Filter({title, isActive = false, type, ...rest}) {
    const colorButton = type === 'open' ? '#D08E44' : '#04D361';
    return (
        <Button
            variant={"outline"}
            borderWidth={isActive ? 1 : 0}
            borderColor={colorButton}
            bgColor={"#202024"}
            flex="1"
            {...rest}
        >
            <Text
            color={isActive ? colorButton : "#7C7C8A"}
            fontSize={"xs"}
            >
                {title}
            </Text>
        </Button>
    );
}