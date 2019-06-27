import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { INTRO } from '../../common/config';
import Button from '../../components/Button';
import text from '../../common/text';
import * as ICON from '../../components/Icons';

const width = Math.round(Dimensions.get('window').width);

export default class Intro extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <ICON.ImgLogo />
                <ICON.ImgIntro />

                <View style={{ alignItems: 'center', marginTop: -50}}>
                    <Text style={[text.t_14_500_ff, { textAlign: 'center'}]}>{INTRO}</Text>

                    <TouchableOpacity style={{ marginVertical: 14 }} onPress={() => Actions.signup()}>
                        <Button text={'CREATE CUENTA GRATIS'} type={'white'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginVertical: 14 }} onPress={() => Actions.signin()}>
                        <Text style={text.t_15_600_ff}>?YA TIENES CUENTA?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: colors.SKY,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})