import { Card, CardHeader, CardBody, CardFooter, Text, Image } from '@chakra-ui/react'

interface PokeCardProps {
    name: string;
    type: string[];
    image: string;
    weight: string;
    height: string;
}

export const PokeCard = (props: PokeCardProps) => {
    const { name, type, weight, height, image } = props;

    let formattedType = '';

    if (type.length > 1) {
        formattedType = type.join(", ")
    } else {
        formattedType = type[0]
    }

    return (
        <div className='pokecard'>
            <Card align='center'>
                <CardHeader>{name}</CardHeader>
                <CardBody>
                    <Image className='pokeimage' src={image} alt={name} />
                    <div className='field-names'>
                        <Text>type:</Text>
                        <Text>weight:</Text>
                        <Text>height:</Text>
                    </div>
                    <div className='fields'>
                        <Text>{formattedType}</Text>
                        <Text>{weight} lbs</Text>
                        <Text>{height} feet</Text>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};