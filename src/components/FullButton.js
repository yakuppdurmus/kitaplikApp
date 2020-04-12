import React from 'react';
import { Button, Text } from 'native-base';
export const FullButton = ({ text,style }) => {
    return (
        <Button full style={Object.assign({ backgroundColor: '#2980b9', borderColor: '#2980b9', borderRadius: 10, marginTop: 10 },style)}>
            <Text>{text}</Text>
        </Button>
    )
}