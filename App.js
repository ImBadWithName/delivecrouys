import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Message from './src/Message';
import { useEffect, useState } from 'react';
import MenuItem from './src/MenuItem';
import NavBar from './src/NavBar';
import Menu from './src/Menu';
import Cart from './src/Cart';
import ItemView from './src/ItemView';
import Success from "./src/Success";


export default function App() {
  const [menu, setMenu]= useState([
    {id:0,
      name: "Pate pesto",
    description:'pâte passable',
    price:2.10,
    image:'https://infos-nutrition.crous-montpellier.fr/images/produits_photos/ru-spag-pesto-632c445e6cd1d662128025.jpg',
    selected:false,
    },
    {id:1,
      name: "Kebab",
    description:'Salade, tomate, oignon',
    price:5.20,
    image:'https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg',
    selected:false,
    },
    {id:2,
      name: "Choucrouss mystère",
    description:'Ha ha, get it ?',
    price:2.50,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/2021-01-10_13-08-38_ILCE-6500_DSC01353_DxO_%2850958169387%29.jpg/1200px-2021-01-10_13-08-38_ILCE-6500_DSC01353_DxO_%2850958169387%29.jpg',
    selected:false,
    },
    {id:3,
      name: 'La "soupe"',
    description:'Enfin, je crois...',
    price:1.50,
    image:'https://www.regal.fr/sites/art-de-vivre/files/r25-soupe-de-pdt-croustillant_bw.jpg',
    selected:false,
    },
    {id:4,
      name: "Le vers d'eau",
    description:'glou glou glou',
    price:19.99,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFvZ08IgWX6G6oRtv0WT3Wu7YuKiFHT57Ag&usqp=CAU',
    selected:false,
    },
    {id:5,
      name: "Couvert",
    description:"pour manger c'est mieux",
    price: 10.90,
    image:'https://www.vaisselle-jetable-discount.fr/22057-pdt_540/pack-10-set-4-en-1-couverts-bois-serviette.jpg',
    selected:false,
    },    
    {id:6,
      name: "Pizzaaaa",
    description:'saveur choucroute-annanas',
    price:3.40,
    image:'https://cdn-wp.valio.fi/valio-fi/2023/04/40817-pizza-margherita.jpeg',
    selected:false,
    },
    {id:7,
      name: "Steack de marmotte",
    description:'mium mium',
    price:6.16,
    image:'https://www.maheu-maheu.com/img/GetIMG.aspx?IDIMG=3c7sMTF2ScjTLuRBZetQCA%3D%3D',
    selected:false,
    }
  ])
  const [targetItem,setTargetItem]= useState();
  const [view,setView]=useState("home")
  const clearCart = ()=>{
    setMenu(menu.map(item=>({...item,selected:false})))
  }
  const changeView=(viewName)=>{
    setTargetItem()
    setView(viewName)
  }
  const setSelectedItem = (id,value)=>{
    setMenu([...menu.map(item=>item.id===id?{...item,selected:value}:{...item})])
  }
  useEffect(()=>{
    console.log(menu.map(item=>({selected:item.selected})));
  })
  return (
    <View style={{width:'100%',height:"100vh"}}>

      <NavBar targetItem={targetItem} setView={changeView} cartSize={menu.filter(item=>item.selected).length} />
      {view==="home" && !targetItem &&
        <Menu setTargetItem={setTargetItem} items={menu} setSelectedItem={setSelectedItem}/>}
      {view==="cart" && !targetItem &&
        <Cart setView={changeView} clear={clearCart} setTargetItem={setTargetItem} 
        items={menu.filter(item=>item.selected)} setSelectedItem={setSelectedItem}/>}
      {view==="success" && !targetItem &&
        <Success/>}
      {targetItem && 
        <ItemView item={targetItem}/>}
    </View>
  );
}
