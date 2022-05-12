import { useState, useContext, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client';

import { context } from '../../context';

const Header = props => {
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');

    useEffect(() => {
        (async function getUserData() {
            try {
                const response = await client.get(`/${searchedValue}`);
                const repos = await client.get(`/${searchedValue}/repos`);
 
                ctx.setUserData(response.data);
                ctx.setRepos(repos.data);
            } catch(err) {
                console.log(err);
            }
        })()
    }, [props.username]);

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
        
                {/* <HeaderSearchButton onClick={saveQueryOnURL}>
                    <FiSearch size={15} />
                </HeaderSearchButton> */}

                <Link to={`/?username=${searchedValue}`}>
                    <FiSearch size={15} />
                </Link>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;