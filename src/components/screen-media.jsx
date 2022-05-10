import styled from 'styled-components';
const Screen = styled.div`
    & {
        width:320px;
        height:600px;
        position:relative;
        border-radius:50px;
        z-index:1;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0px;
        margin:20px;
        font-size:.9rem;
       
    }
    & img {
        pointer-events:none;
        z-index:1;
        width:370px;
        height:670px;
        position:absolute;
        border-radius:25px;
    }
    & iframe {
        margin-left:2px;
        width:88.7%;
        border:2px solid #f2f2f2;
        height:99%;
        border-radius:25px;
        background:white;
    }
    & iframe::-webkit-scrollbar {
        background:red !important;
      }
`;

export function screenMobile() {
    
    return(
        <Screen id="displayDiv">
            <img src="./src/media/mp-bg.png" alt="" />
            <iframe id="9348" src="/*THE URL IN YOUR DOMAIN*/" ></iframe>
        </Screen>
    )
    
}

export default screenMobile;
