import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileItem from '@/components/common/ProfileItem'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Profile() {

    const DATA = [
        {
            id: 1,
            name: "Settings",
            subName: "Network and Media Setting",
            icon: "",
            onPress: "(profile)/Setting"
        },
        {
            id: 2,
            name: "Profile",
            icon: "",
            onPress: "(profile)/Profile"
        },
        {
            id: 3,
            name: "Credit Balance",
            icon: "",
            onPress: "(profile)/CreditBalance"
        },
        {
            id: 4,
            name: "Balance Transfer",
            icon: "",
            onPress: "(profile)/BalanceTransfer"
        },
        {
            id: 5,
            name: "Report",
            icon: "",
            onPress: "(profile)/Report"
        },
        {
            id: 6,
            name: "Transfer History",
            icon: "",
            onPress: "(profile)/TransferHistory"
        },
        {
            id: 7,
            name: "Invite a Friend",
            icon: "",
            onPress: "invite"
        },
        {
            id: 8,
            name: "About",
            icon: "",
            onPress: "(profile)/About"
        },
        {
            id: 9,
            name: "Help & Support",
            icon: "",
            onPress: "(profile)/Support"
        },
        {
            id: 10,
            name: "Exit",
            icon: "",
            onPress: "exit"
        },
    ]
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            {DATA.map(item => {
                return <ProfileItem name={item.name} subName={item.subName}
                    icon={item.icon} onPress={item.onPress}
                />
            })}
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})