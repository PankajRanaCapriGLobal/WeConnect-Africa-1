import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AfricaText from './AfricaText';
import { appColor } from '@/theme/appColor';


interface ProfileItemProps {
    name: string;
    icon: string;
    subName?: string;
    onPress: String
}


export default function ProfileItem({
    icon, name, onPress, subName
}: ProfileItemProps) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.item}>
            <AfricaText>{name}</AfricaText>
            {subName && <AfricaText>{subName}</AfricaText>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: appColor.SECONDARY_COLOR
    }
})