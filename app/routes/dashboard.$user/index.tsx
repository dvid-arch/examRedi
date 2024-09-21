import BentoGrid from "./component/bentoUserLevel";
import { Action } from "./component/takeAction";

export default function Index() {
    return (
        <div className="text-black px-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">

                    <BentoGrid />
                </div>
                <div className="flex-1 py-8">
                    <Action />
                </div>
            </div>
        </div>
    )
}

