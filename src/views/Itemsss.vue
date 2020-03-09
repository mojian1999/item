<template>
	<div>
		<!--轮播-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in swipers" :key="index">
					<img :src="item.url"  :alt="item.adtitle" />
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="title">{{datas.pro_name}}</div>
		<span class="time">{{datas.pro_timestr}}</span>
		<span class="good" v-for="(goods,index) in good" :key="index">{{goods[1].value}}{{goods[1].name}}</span>
		<div class="all"><span>有限期:{{datas.pro_active_date_text}}</span>|<span>场地:{{datas.pro_placestr}}</span></div>
		<div class="money"><span class="money-1"><strong>{{datas.pro_price}}</strong></span><span style="font-size: 0.85rem; color: red;">.0</span>元</div>
		<div class="graystripe"></div>
			<div class="subscribeTitle">可预约场馆</div>
			<div class="subscribeBorder">
				<div class="periphery" v-for="(item,index) in subscribe" :key="index">
					<img :src="item.gym_headimg[0].url">
					<div class="subscribeData">
						<div class="subscribeName">{{item.gym_name}}</div>
						<div class="subscribelocation">{{item.gym_address}}</div>
						<div class="subscribeSite">
							<span>{{item.gym_distance}}</span><span class="nav">导航</span>
						</div>
					</div>
				</div>
			</div>
		<div class="graystripe" style="margin-top: 10%;"></div>	
		<span class="courseContent">课程内容</span>
		<div v-html="datas.pro_descr" style="margin-left: 4%;"></div>
		<div class="alll"></div>
	</div>
</template>

<script>
	import axios from 'axios'; 
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css';
	export default{
		name:"Itemsss",
		data:function(){
			return {
				datas:{},
				swipers:[],
				good:"",
				subscribe:[]
			}
		},
		mounted:function(){
			let params = new URLSearchParams();
			params.append('pro_id',this.$route.params.itemid);
			params.append('fid','');
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",params).then((res)=>{
				this.datas = res.data.data
				this.swipers = res.data.data.pro_imglist
				// this.good = res.data.data.comment.type[1].value
				this.good = res.data.data.comment.type
				this.subscribe = this.datas.pro_gym_list
				console.log(this.good)
				
			})
			
			
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:2000,
			    speed:1000,
			    observer:true,
			    observeParents:true,
			  })   
			
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	
	.alll{
		height: 10rem;
	}
	
	
	.swiper-container img{
		height: 14.5625rem;
	}
	
	
	.title{
		font-size: 1.6rem;
		margin-left: 4%;
		margin-top: 4%;
		margin-bottom: 1%;
	}
	
	.time{
		margin-left: 6%;
		font-size: 0.9rem;
		margin-top: -30px;
	}
	
	.good{
		display: inline-block;
		margin-left: 40%;
		width: 3rem;
		height: 1.5rem;
		background: #4cacff;
		color: white;
		border-radius: 50px;
		padding-left: 6.5px;
	}
	
	.all{
		margin-left: 4%;
		font-size: 0.90rem;
		margin-top: 3%;
	}
	
	.money{
		margin-top: 2%;
		margin-left:4%;
		.money-1{
			font-size: 1.5rem;
			color: red;
		}
	}
	
	.graystripe{
		margin-top: 3%;
		width: 100%;
		height: 0.8rem;
		background: #f5f5f5;
	}
	
	.subscribeTitle{
		font-size: 1.25rem;
		margin-left: 4%;
		margin-top: 7%;
		margin-bottom: 3%;
	}
	
	.subscribeBorder{
		width: 96%;
		height: 15rem;
		margin: auto;
		display: flex;
		overflow-x: scroll;	
		margin-left: 2%;
		
		.periphery{
			width: 48%;
			margin-left: 2%;
			background: #F5F5F5;
			
			img{
				width: 100%;
				height: 45%;
				border-radius: 10px;
			}
			
			.subscribeData{
				width: 100%;
				margin-top: -3%;
				height: 53%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

			
				
				.subscribeName{
					width: 80%;
					font-size: 0.875rem;
					margin-left: 6%;
				}
				
				.subscribelocation{
					width: 85%;
					font-size: 0.75rem;
					margin-left: 6%;
				}
				
				.subscribeSite{
					font-size: 0.75rem;
					margin-left: 6%;
					.nav{
						background: blue;
						color: white;
						font-size: 0.875rem;
						margin-left: 40%;
						border-radius: 4px;
						padding: 3px;
					}
				}
			}
		}
			
		
	}
	.courseContent{
		display: block;
		font-size: 1.1875rem;
		margin-left: 4%;
		margin-top: 6%;
		margin-bottom: 4%;
	}
</style>
		  
	 

