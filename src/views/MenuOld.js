import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import MenuCard from "../components/MenuCard";
import IMG_Coldbrew_Tonic from "../assets/img/products/Cold-brew_Tonic.jpg";
import IMG_Jap_Coldbrew from "../assets/img/products/Japanese_Cold_Brew.jpg";
import IMG_Filter_Coffee from "../assets/img/products/Filter_Coffee.jpg";
import IMG_Toasted_Coconut from "../assets/img/products/Toasted_Coconut.jpg";
import IMG_Vietnamese_Brew from "../assets/img/products/Vietnamese_Brew.jpg";
import IMG_Sparkling_Berries from "../assets/img/products/Sparkling_Berries.jpg";

const coldBrewDesc =
    "Brewed over fifteen hours, this cold brew tonic has slight notes of cherry, \
    chocolate and stronger notes of dried plum in fusion with sparkling tonic water to quench your thirst in the tropical weather of Maldives.";
const japColdBrewDesc =
    "Japanese Cold brew is made with a method used by the Japanese to brew coffee and to instantly cool it down in the process, \
    allowing us to extract flavorful notes from the beans in minutes rather than hours.";
const filterCoffeeDesc =
    "Sourced from countries like Brazil, Tanzania, Uganda and Ethiopia, our filter coffee is hand-brewed and filtered to get a coffee that is clear, \
    light-bodied and flavorful while retaining all the notes of the coffee bean.";
const toastedCocoDesc =
    "Cold-brew coffee infused with Maldivian culture; this drink will remind you of a Maldivian's humble beginnings. \
    The drink consists of cold-brew coffee with a home-made coconut infusion and coconut milk.";
const vietBrewDesc =
    "The perfect fusion of coffee and milk, made with one of the most famous street-style methods of brewing coffee in Vietnam; \
    this coffee consists of single-origin filter coffee to a small ratio of sweetened condensed milk.";
const sparkleBerryDesc =
    "The perfect fusion of coffee and milk, made with one of the most famous street-style methods of brewing coffee in Vietnam; \
    this coffee consists of single-origin filter coffee to a small ratio of sweetened condensed milk.";

const cardAnimList = {
    cardPosInit: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0.3,
        },
    },
    cardPosFinal: {
        zIndex: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.1,
        },
    },
};
const cardAnimItem = {
    cardPosInit: { opacity: 0, y: 25 },
    cardPosFinal: { opacity: 1, y: 0 },
};

export default function Menu(props) {
    return (
        <div>
            <div className="text-center font-semibold text-tch-gray-dk text-3xl xl:text-2xl pt-24 pb-20">
                <p>OUR PRODUCTS</p>
                <p className="text-xl font-light pt-8 -mb-12 mx-12 xl:mx-96">
                    Single-origin coffee brewed to perfection in the heart of Addu City, with
                    flavours from France, Brazil, Uganda and Ethiopia and our very own Maldives. We
                    are here to change the coffee-culture in Addu.
                </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center space-y-2 md:space-y-0 lg:space-y-0 xl:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-8 font-semibold text-md text-tch-gray-dk pt-4 pb-12">
                <div className="w-auto shadow-md rounded-full p-2 px-4">#SINGLEORIGINCOFFEE</div>
                <div className="w-auto shadow-md rounded-full p-2 px-4">#ETHICALLYSOURCED</div>
            </div>
            <div className="flex justify-center p-6 px-8 sm:px-24 md:px-24 lg:px-24 xl:px-12 xl:overflow-x-auto">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 pb-8"
                    initial="cardPosInit"
                    animate={props.useAnim}
                    variants={cardAnimList}
                >
                    {/* <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Coldbrew_Tonic}
                            cardName="Cold-brew"
                            cardDesc={coldBrewDesc}
                        />
                    </motion.div> */}
                    <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Coldbrew_Tonic}
                            cardName="Cold-brew Tonic"
                            cardDesc={coldBrewDesc}
                        />
                    </motion.div>
                    <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Filter_Coffee}
                            cardName="Filter Coffee"
                            cardDesc={filterCoffeeDesc}
                        />
                    </motion.div>
                    <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Sparkling_Berries}
                            cardName="Sparkling Berries"
                            cardDesc={sparkleBerryDesc}
                        />
                    </motion.div>
                    <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Jap_Coldbrew}
                            cardName="Japanese Cold-brew"
                            cardDesc={japColdBrewDesc}
                        />
                    </motion.div>
                    <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Vietnamese_Brew}
                            cardName="Vietnamese Brew"
                            cardDesc={vietBrewDesc}
                        />
                    </motion.div>
                    <motion.div variants={cardAnimItem}>
                        <MenuCard
                            cardImage={IMG_Toasted_Coconut}
                            cardName="Toasted Coconut"
                            cardDesc={toastedCocoDesc}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

Menu.propTypes = {
    useAnim: PropTypes.object,
};