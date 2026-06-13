import { useNavigate } from 'react-router-dom';
import { StoryExperience } from "./src/components/StoryExperience";

export default function Story() {
    const navigate = useNavigate();
    return <StoryExperience onExit={() => navigate('/about')} />;
}