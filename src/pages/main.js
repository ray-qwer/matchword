import react, {useState ,useEffect} from "react"
import {Div, Text,} from "atomize"
import Word from "../components/word"
import RankCard from "../components/rankCard"
import AnserCard from "../components/answerCard"

function Main(){
    const initialCorrectPair = 0;
    const oriWords = ["打","手","吃","口","英","艸",
    "國","囗","他","人","江","水","板","木","快","心",
    "好","女","煮","火","天","大","早","日","會","曰",
    "有","月","爸","父","步","止","爭","爪","飯","食",];
    const [words, setWords] = useState(Array(36).fill("?"));
    const [answers, setAnswers] = useState([]);
    const [dict,setDict] = useState({});
    const [selectedList, setSelectedList] = useState([]);
    const [correctList, setCorrectList] = useState([]);
    const [isStart, setIsStart] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [correctPair, setCorrectPair] = useState(initialCorrectPair);
    const [timer, setTimer] = useState(0);
    const [record, setRecord] = useState([]);
    const [rankClick, setRecordClick] = useState(false);
    const [answerClick, setAnswerClick] = useState(false);

    useEffect(()=>{
        const makeDict = () =>{
            // const d = {};
            const aL = []
            for(let i =0; i < oriWords.length/2; i++){
                let aEle = [];
                for(let j =0; j<2; j++){
                    dict[oriWords[2*i+j]] = i;
                    aEle.push(oriWords[2*i+j]);
                    if (j === 1){
                        aL.push(aEle);
                    }
                }
            }
            setDict(dict);
            setAnswers(aL);
        }
        makeDict();
    },[])

    useEffect(()=>{
        const myInterval = setInterval(()=>{
            if (isStart){
                let t = timer+0.1;
                setTimer(t);
            }
        },100)
        return ()=>{
            clearInterval(myInterval);
        }
    },[timer,isStart])
    
    const shuffle = () =>{
        const m = oriWords.sort(()=>Math.random()-0.5);
        setWords([...m]);
        setIsStart(true);
        setSelectedList([]);
        setCorrectList([]);
        setRecordClick(false);
        setAnswerClick(false);
    }

    const selectWordChecking = (key) =>{
        if (!isStart) return;
        if (correctList.includes(key)){
            return;
        }
        else if (selectedList.length === 0){
            setSelectedList([key]);
            return;
        }
        else {
            if (selectedList.includes(key)) return;
            else {
                if (dict[words[selectedList[0]]] === dict[words[key]]){
                    setCorrectList([...correctList,selectedList[0], key]);
                    setCorrectPair(correctPair+1);
                    checkEnd();
                }
                setSelectedList([]);
                console.log(correctList);
                return;
                
            }
        }
    }
    const add2Record = (r) =>{
        r = Math.round(r*10)/10;
        let rl = record;
        if(rl.length === 10){
            rl.shift();
        } 
        rl.push(r)
        setRecord([...rl]);
        
    }
    const checkEnd = () =>{
        if(correctPair+1 >= words.length/2){
            setIsEnd(true);
            setIsStart(false);
            setTimer(0);
            setCorrectPair(initialCorrectPair);
            add2Record(timer);
            // timer stop
        }
    }

    const buttonClick = (str) =>{
        if (str === "record"){
            setRecordClick(true);
            setAnswerClick(false);
        } else if (str === "answer"){
            setRecordClick(false);
            setAnswerClick(true);
        }
    }

    return(
        <Div w="100vw" h="100vh" align="center" justify="space-around" d="flex" flexDir="column">
            <Div w="60vw" h="80vh" p="10px" bg="#FFFFFF" d="flex" rounded="xl" border="5px solid" 
            align="space-between" justify="space-between" flexWrap="wrap">
                { rankClick ? 
                    <Div w="100%" h="100%" d="flex" justify="center" align="center" flexWrap="wrap">
                    {record.map((r,key)=>
                        　<RankCard w="80%" h="15%" time={r} key={key} rank={key+1} />
                    )}
                    </Div>
                : answerClick ? 
                answers.map((a,key)=>
                <AnserCard w="30%" h="15%" word={a} key={key} />) :
                words.map((w,key)=>
                <Word w="15%" h="15%" word={w} key={key} 
                isSelected={selectedList.includes(key)} 
                isCorrect={correctList.includes(key)} 
                onClick={()=>{selectWordChecking(key)}}/>)
            }
            </Div>
            <Div w="60vw" d="flex" align="space-around" justify="space-around" flexDir="row">
                {/* button block*/}
                {isStart ? (<>
                    <Text textSize="7vw">{timer.toFixed(1)}</Text>
                </>): (<>
                <Div w="20%" h="100%" hoverBg="lightgray" cursor="pointer" textSize="32px" border="3px solid" 
                borderColor="black" rounded="xl" flexWrap="wrap" d="flex" justify="center"
                onClick={shuffle}>
                    <Text textSize="5vh">Start!!</Text>
                </Div>
                {isEnd && <> 
                <Div w="20%" h="100%" hoverBg="lightgray" cursor="pointer" textSize="32px" border="3px solid" 
                borderColor="black" rounded="xl" flexWrap="wrap" d="flex" justify="center"
                onClick={()=>{buttonClick("record");}}>
                    <Text textSize="5vh">Record</Text>
                </Div>
                <Div w="20%" h="100%" hoverBg="lightgray" cursor="pointer" textSize="32px" border="3px solid" 
                borderColor="black" rounded="xl" flexWrap="wrap" d="flex" justify="center"
                onClick={()=>{buttonClick("answer");}}>
                    <Text textSize="5vh">Answer</Text>
                </Div>
                </>}
                </>)}
            </Div>
        </Div>
    )
}

export default Main;