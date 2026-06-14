import { useNavigate } from 'react-router-dom';
import { StoryExperience } from "./src/components/StoryExperience";

export default function Story() {
    const navigate = useNavigate();
    return (
        <>
            <title>Her Story | Dr. Metolo Foyet</title>
            <meta name="description" content="Experience the interactive journey of Dr. Metolo Foyet — from herding goats in Fotouni to leading conservation work across 70 countries. A 5-minute story told as she lived it." />
            <StoryExperience onExit={() => navigate('/about')} />
        </>
    );
}