import { ScrollView, StyleSheet,  View } from 'react-native';
import MenuItem from './MenuItem';

export default function Menu(props) {

  return (
    <View style={{width:'100%'}}>
      <ScrollView vertical contentContainerStyle={styles.menu}>
      {props.items.map((item,index)=>(
        <MenuItem setTargetItem={()=>props.setTargetItem(item)} item={item} setSelected={(value)=>props.setSelectedItem(item.id,value)} key={index}/>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    gap:20,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding:20,
    flexWrap:'wrap',
    flexDirection:'row',
    overflow:"scroll",
    paddingBottom:200
  }
});
