//put components used by multiple other components as a seperate module

import { NgModule } from "@angular/core";
import { Card } from "./card/card";


@NgModule({

    declarations : [Card],
    exports : [Card]

})

export class SharedModule{}