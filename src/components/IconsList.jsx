import { PiKnifeBold } from "react-icons/pi"
import { PiCowboyHatBold } from "react-icons/pi";
import { GiDramaMasks } from "react-icons/gi";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { GiPistolGun } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { FaBaseballBatBall } from "react-icons/fa6";
import { GiMonsterGrasp } from "react-icons/gi";
import { PiSwordDuotone } from "react-icons/pi";
import { GiMusicalNotes } from "react-icons/gi";
import { BsPatchQuestion } from "react-icons/bs";
import { GiPoliceCar } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { TbUfo } from "react-icons/tb";
import { RiTreasureMapLine } from "react-icons/ri";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

const IconsList = () => {
    return(
        <>
        <div className="flex flex-col">
            <PiKnifeBold /> thriller
            <PiCowboyHatBold /> western
            <GiDramaMasks />drama
            <MdOutlineTheaterComedy />comedy
            <GiPistolGun />action
            <FaRegHeart />romance
            <FaBaseballBatBall />sports
            <GiMonsterGrasp />horror
            <PiSwordDuotone />fantasy
            <GiMusicalNotes />music
            <BsPatchQuestion />mystery
            <GiPoliceCar />crime
            <MdFamilyRestroom />family
            <TbUfo />sci-fi
            <RiTreasureMapLine />adventure
            <HiOutlineDocumentMagnifyingGlass />biography
        </div>
        </>
    )
}

export default IconsList;