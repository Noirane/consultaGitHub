import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    ProfilePicture
} from './styles';

const ReposContainer = props => {
    return (
        <Section>
            <Title>Alguns seguidores de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.followers).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.login}</h2>
                        <ProfilePicture src={repo?.avatar_url}  />
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}


export default ReposContainer;