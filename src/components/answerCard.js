import {Div, Text} from 'atomize'

function AnswerCard(props){
    // if correct => word and border color change to white
    // if select => border change to green
    // if not correct => border return to brown
    // const [select, setSelect] = useState(false);
    // const [correct, setCorrect] = useState(false);
    return (
        <Div w={props.w} h={props.h} border="8px solid" 
        hoverBg="lightgray"
        borderColor="#e8b78e" rounded="xl" textSize="8vh"
        d="flex" flexDir="row" align="center" justify="space-around">
            <Text textColor="black" fontFamily="DFKai-sb">{props.word[0]}</Text>
            <Text textColor="black" fontFamily="DFKai-sb">{props.word[1]}</Text>            
        </Div>
    )
}

export default AnswerCard;