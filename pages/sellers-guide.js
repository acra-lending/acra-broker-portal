import { VueWrapper } from 'vuera';
import Home from '../vue_component/Home.vue';
import SearchResults from '../vue_component/SearchResults.vue';

function sellersGuide () {
    return (
        <div>
            <VueWrapper
                component={Home}
            />
        </div>
    )
}

export default sellersGuide;