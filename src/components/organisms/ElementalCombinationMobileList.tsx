import Image from "next/image";
import { ListItem } from "../atoms";
import { List } from "../molecules";
import AirEarth from "@images/hupper-review/combinations/air_earth.png";
import EarthFire from "@images/hupper-review/combinations/earth_fire.png";
import EarthWater from "@images/hupper-review/combinations/earth_water.png";
import FireAir from "@images/hupper-review/combinations/fire_air.png";
import WaterAir from "@images/hupper-review/combinations/water_air.png";
import WaterFire from "@images/hupper-review/combinations/water_fire.png";

export const ElementalCombinationMobileList = () => {
  return (
    <>
      <List>
        <ListItem>
          <Image
            className="my-0 mr-4"
            src={EarthWater}
            alt="Combinação Terra e Água"
            width={64}
          />
          <div>
            <h4 className="m-0">Estagnação</h4>
            <p className="text-sm mb-0">Terra e Água</p>
            <span className="text-bold text-red-600">Remove</span> 3 PM.
          </div>
        </ListItem>
        <ListItem>
          <Image
            className="my-0 mr-4"
            src={EarthFire}
            alt="Combinação Terra de Fogo"
            width={64}
          />
          <div>
            <h4 className="m-0">Erupção</h4>
            <p className="text-sm mb-0">Terra de Fogo</p>
            Aumenta o dano sofrido pelo alvo em <b>15%</b>.
          </div>
        </ListItem>
        <ListItem>
          <Image
            className="my-0 mr-4"
            src={AirEarth}
            alt="Combinação Terra e Ar"
            width={64}
          />
          <div>
            <h4 className="m-0">Secagem</h4>
            <p className="text-sm mb-0">Terra e Ar</p>
            <span className="text-bold text-green-600">Rouba</span> 3 de
            alcance.
          </div>
        </ListItem>
        <ListItem>
          <Image
            className="my-0 mr-4"
            src={WaterAir}
            alt="Combinação Ar e Água"
            width={64}
          />
          <div>
            <h4 className="m-0">Cristalização</h4>
            <p className="text-sm mb-0">Água e Ar</p>
            Reduz o dano provocado pelo alvo em <b>15%</b>.
          </div>
        </ListItem>
        <ListItem>
          <Image
            className="my-0 mr-4"
            src={FireAir}
            alt="Combinação Fogo e Ar"
            width={64}
          />
          <div>
            <h4 className="m-0">Carbonização</h4>
            <p className="text-sm mb-0">Fogo e Ar</p>
            <span className="text-bold text-red-600">Remove</span> 2 PA.
          </div>
        </ListItem>
        <ListItem>
          <Image
            className="my-0 mr-4"
            src={WaterFire}
            alt="Combinação Fogo e Ar"
            width={64}
          />
          <div>
            <h4 className="m-0">Ebulição</h4>
            <p className="text-sm mb-0">Água e Fogo</p>
            <span className="text-bold text-red-600">Remove</span> 60 Fuga.
          </div>
        </ListItem>
      </List>
    </>
  );
};
