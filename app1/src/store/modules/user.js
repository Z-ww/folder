export default{
    state:{
        userName:'',
        userId:'',//ID
        userPoint:'',//积分
        userGift:'',//优惠券
        userCity:'',//城市
        userImg:'',//头像
        userBalance:'',//余额
        latitude: '',//经度
        longitude: '',//纬度
    },
    mutations:{
        setUserid(state,value){
            state.userId=value
        },
        setUsername(state,value){
            state.userName=value
        },
        setUserpoint(state,value){
            state.userPoint=value
        },
        setUsergift(state,value){
            state.userGift=value
        },
        setUsercity(state,value){
            state.userCity=value
        },
        setUserimg(state,value){
            state.userImg=value
        },
        setUserblce(state,value){
            state.userBalance=value
        },
      setlatitude(state,value){
        state.latitude=value
      },
      setlongitude(state,value){
        state. longitude=value
      },
    },

}
