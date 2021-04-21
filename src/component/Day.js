import Word from "../component/Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";


export default function Day(){
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch(`http://localhost:3001/day=${day-1}`);
    const history = useHistory();
   
        const onClick = (days) => {
            history.push(days)
        }

 return(
    <>
      <h2>Day {day}</h2><button onClick={onClick}>전날</button><button>다음날</button>
      <table>
          <tbody>
              {words.map(word => (
                 <Word word={word} key={word.id}/>
              ))}
          </tbody>
      </table>
    </>
    );
}