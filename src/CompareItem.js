import React from 'react';
import './styles/App.css';

const CompareItem = (props) => { 
    return (
      <tr>
        <td className={props.row}><img src={props.character.images.small_icon}/></td>
        <td className={props.row}>{props.character.name}</td>
        <td className={props.row}>{props.character.tier.tier}</td>
        <td className={props.row}>{props.character.tier.rank}</td>
        <td className={props.row}>{props.character.world_stats.wins}</td>
        <td className={props.row}>{props.character.world_stats.losses}</td>
        <td className={props.row}>{props.character.weight.class}</td>
        <td className={props.row}>{props.character.weight.weight_value}</td>
        <td className={props.row}>{props.character.jump_height}</td>
        <td className={props.row}>{props.character.speeds.initial_dash}</td>
        <td className={props.row}>{props.character.speeds.run_speed}</td>
        <td className={props.row}>{props.character.speeds.air_speed}</td>
        <td className={props.row}>{props.character.speeds.fall_speed}</td>
        <td className={props.row}>{props.character.speeds.fast_fall_speed}</td>
        <td className={props.row}>{props.counter}</td>
        <td className={props.row}>{props.character.strongest_smash.attack}</td>
        <td className={props.row}>{props.character.strongest_smash.damage}</td>
      </tr>
    )
}



export default CompareItem;