import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileItem from '@/components/common/ProfileItem'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AboutIcon, BalanceTransferIcon, CreditbalanceIcon, ExitIcon, ProfileIcon, ReportIcon, SettingIcon, ShareIcon, SupportIcon, TransferHistoryIcon } from '@/assets/svgIcon/SvgIcon'


export default function Profile() {

    const DATA = [
        {
            id: 1,
            name: "Settings",
            subName: "Network and Media Setting",
            icon: <SettingIcon />,
            onPress: "(profile)/Setting"
        },
        {
            id: 2,
            name: "Profile",
            icon: <ProfileIcon />,
            onPress: "(profile)/Profile"
        },
        {
            id: 3,
            name: "Credit Balance",
            icon: <CreditbalanceIcon />,
            onPress: "(profile)/CreditBalance"
        },
        {
            id: 4,
            name: "Balance Transfer",
            icon: <BalanceTransferIcon />,
            onPress: "(profile)/BalanceTransfer"
        },
        {
            id: 5,
            name: "Report",
            icon: <ReportIcon />,
            onPress: "(profile)/Report"
        },
        {
            id: 6,
            name: "Transfer History",
            icon: <TransferHistoryIcon />,
            onPress: "(profile)/TransferHistory"
        },
        {
            id: 7,
            name: "Invite a Friend",
            icon: <ShareIcon />,
            onPress: "invite"
        },
        {
            id: 8,
            name: "About",
            icon: <AboutIcon />,
            onPress: "(profile)/About"
        },
        {
            id: 9,
            name: "Help & Support",
            icon: <SupportIcon />,
            onPress: "(profile)/Support"
        },
        {
            id: 10,
            name: "Exit",
            icon: <ExitIcon />,
            onPress: "exit"
        },
    ]
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            {DATA.map(item => {
                return <ProfileItem name={item.name} subName={item.subName}
                    Icon={item.icon} onPress={item.onPress}
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