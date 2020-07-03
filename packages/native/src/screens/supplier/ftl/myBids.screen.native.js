import React, { useState,useEffect } from 'react';
import { useAPI } from '../../../hooks/api';
import { ScreenWrapperNative } from '../../../components/screenWrapper.native';
import { CardLiveTruck } from '../../../components/cards/cardLiveTruck';
import { CardMyBids } from '../../../components/cards/cardMyBids';

export const MyBidsScreenNative = ({ navigation }) => {
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, reload } = useAPI(`/mybids/`);

  const filterTableData=(array)=>{
    const filtered = []
    array.forEach((i)=>{
      if(filtered.some(item => {return i.order.id === item.order.id })){
        return null
      }
      filtered.push(i)
      return null
    })
    return filtered
  }

  useEffect(()=>{
    if(data) {
      if(data[0]){
        setFilteredData(filterTableData(data))
      }
    }},[data,loading])

  return (
    <ScreenWrapperNative
      header
      title='My Bids'
      loading={loading}
      navigation={navigation}
      pullToRefresh
      onRefresh={() => {
        reload();
      }}>
      {(filteredData || []).map((Item,index) => (
        <CardMyBids reload={reload} bid={Item} data={data} index={index} key={index.toString()} />
      ))}
    </ScreenWrapperNative>
  );
};
