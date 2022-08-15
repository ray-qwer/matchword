import {Div, Text} from 'atomize'

function Word(props){
    // if correct => word and border color change to white
    // if select => border change to green
    // if not correct => border return to brown
    // const [select, setSelect] = useState(false);
    // const [correct, setCorrect] = useState(false);
    const correct = props.isCorrect;
    const selected = props.isSelected;
    const clickWord = () =>{
        // if (!correct){
        //     setSelect(!select);
        // }
        console.log(selected)
    }
    return (
        <Div w={props.w} h={props.h} border="8px solid" hoverBg={correct?"white":"lightgray"} 
        cursor={correct?"default":"pointer"}
        borderColor={correct?"white":(selected)?"green":"brown"} rounded="xl" textSize="8vh"
        d="flex" align="center" justify="center"
        onClick={()=>{props.onClick(); clickWord();}}>
            <Text textColor={correct?"white":"black"}
            fontFamily="DFKai-sb">{props.word}</Text>
        </Div>
    )
}

export default Word;