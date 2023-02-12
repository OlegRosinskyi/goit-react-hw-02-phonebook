import styled from "styled-components";

export const ButtonContactList = styled.button `
        display: block;    
         background-color: ${({ value }) => {
                switch (value) {
                case true: return '#00eeff';
                default: return 'white'
                }
            } }   ` 