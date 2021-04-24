import bgUrl from "../../resources/bg.jpg";
import groundUrl from "../../resources/ground.png";
import Summer_plants_and_treesUrl from "../../resources/Summer_plants _and_trees.png";//summer
import bg_winterUrl from "../../resources/bg_winter.png";
import clouds_winterUrl from "../../resources/clouds_winter.png";
import plants_and_trees_with_snowUrl from "../../resources/plants_and_trees_with_snow.png";//winter
import bg_autumnUrl from "../../resources/bg_autumn.png";
import autumn_cloudsUrl from "../../resources/autumn_clouds.png";
import autumn_treesUrl from "../../resources/autumn_trees.png";
import leaves2Url from "../../resources/leaves2.png";
import cloudsUrl from "../../resources/clouds.png"
import bg_springUrl from "../../resources/bg_spring.jpg";
import leaves1Url from "../../resources/leaves1.png";



function getSeasonTextures(season) {
    if (season.name === "Spring") {
        return [bg_springUrl,cloudsUrl,leaves2Url,leaves1Url];//spring
    } else if (season.name === "Winter") {
        return [bg_winterUrl,clouds_winterUrl,plants_and_trees_with_snowUrl];//winter
    } else if (season.name === "Summer"){
        return [bgUrl, cloudsUrl, groundUrl,Summer_plants_and_treesUrl] ;//summer
    }else if (season.name === "Autumn"){
        return[bg_autumnUrl,autumn_cloudsUrl,leaves2Url,autumn_treesUrl];//autumn
    }
}

export default getSeasonTextures;