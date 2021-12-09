import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import setAuthToken from "../../util/setAuthToken.js";

import { SharedStyles } from '../../style';

import RewardItem from '../RewardItem';

export default RewardsList = () => {
    const [rewardsInfo, setRewardsInfo] = React.useState([]);
    
    useEffect(() => {
        if (global.token) { 
            setAuthToken(global.token);
        }
        if (rewardsInfo.length == 0)
            axios.get("http://159.223.142.127:3001/api/rewards/all").then((res) => {
                setRewardsInfo(res.data);
            });
    });
    
        
    return <View>
        {rewardsInfo.map((e, i) => <RewardItem cost={e.points} description={e.description} key={i}/>)}
    </View>
}

// const styles = StyleSheet.create({
//     container: {
        
//     }
// });