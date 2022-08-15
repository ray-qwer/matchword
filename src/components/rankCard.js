import {Div, Text} from 'atomize'

function RankCard(props){
    const time = props.time;
    const rank = props.rank;
    return (
        <Div w={props.w} h={props.h} d="flex" flexDir="row" border="2px solid"
        rounded="xl" textSize="8vh" align="center" justify="space-between" p={{x:"5%"}}>
            <Text>{rank}:</Text><Text>{time} sec</Text>
        </Div>
    )
}

export default RankCard;