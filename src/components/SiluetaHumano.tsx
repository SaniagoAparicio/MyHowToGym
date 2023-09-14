import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

type PolygonProps = {
  hoveredGroup: string;
  setHoveredGroup: (group: string) => void;
  group?: string;
  handleSelectMuscle: (muscle: string) => void;
} & React.SVGProps<SVGPolygonElement>;

const Polygon = ({
  hoveredGroup,
  setHoveredGroup,
  group,
  handleSelectMuscle,
  ...props
}: PolygonProps) => {
  return (
    <polygon
      {...props}
      className={
        group
          ? hoveredGroup === group
            ? styles.hovered
            : styles.clickableMuscle
          : styles.muscle
      }
      onMouseEnter={() => setHoveredGroup(group as string)}
      onMouseLeave={() => setHoveredGroup("")}
      stroke="#212854"
      onClick={() => handleSelectMuscle(group as string)}
    />
  );
};

export const SiluetaHumano = ({
  handleSelectMuscle,
}: {
  handleSelectMuscle: (muscle: string) => void;
}) => {
  const [hoveredGroup, setHoveredGroup] = useState("");
  return (
    <svg
      version="1.1"
      id="Map"
      className="gen-by-synoptic-designer"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 578 538"
      xmlSpace="preserve"
    >
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Pec_Mayoris"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="144,116,142,149,159,156,183,150,190,130,169,116"
        group="chest"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Pec_Mayoris"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="90,128,94,150,117,156,135,149,134,117,109,117"
        group="chest"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Rectus_Abdominis"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="155,159,159,171,160,205,160,241,155,255,152,269,143,278,142,221,141,179,142,154"
        group="abs"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Oblique"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="185,169,182,154,161,160,164,171,165,218,178,207,180,185,182"
        group="abs"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Oblique"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="100,206,98,190,93,169,96,154,117,159,113,169,113,219"
        group="abs"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Biceps_Brachii_Long_Head"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="58,181,61,189,73,176,88,146,85,135,67,151"
        group="biceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Neck"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="153,72,141,96,141,110,168,112,190,124,187,104,172,100,160,89"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Neck"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="88,124,91,105,106,100,118,88,126,74,137,97,136,110,110,111"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Deltoids_Front"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="209,144,212,131,211,115,203,107,191,103,194,119,192,130"
        group="shoulders"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Deltoids_Front"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="86,130,69,144,66,131,67,114,77,105,87,105,83,120"
        group="shoulders"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Head_Front"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="121,21,115,43,120,62,130,71,139,76,151,69,158,61,162,39,157,20,139,14"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="GROINS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="146,284,150,320,164,284,169,259,176,245,164,241,156,270"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="GROINS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="134,285,127,321,120,298,116,291,114,277,110,265,102,244,114,240,119,257,124,272"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="QUADS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="102,256,108,279,108,327,101,350,93,339,89,308,86,287,89,261,96,246"
        group="quads"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="QUADS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="112,331,111,289,118,304,126,331,122,345,115,372,106,373,104,357"
        group="quads"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Knee_Front"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="100,357,102,365,104,375,106,384,103,398,90,398,84,388,84,375,91,367"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Tibialis_Anterior"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="192,407,197,390,205,409,212,425,209,474,212,493,200,493"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Shin"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="195,492,188,404,177,402,174,412,174,419,178,448"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Shin"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="104,402,105,412,105,423,103,436,103,447,96,460,92,473,83,491,84,474,86,456,87,444,88,430,90,416,91,403"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Tibialis_Anterior"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="78,491,85,418,86,407,81,392,78,400,72,410,68,425,71,475,68,493"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Brachioradialis"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="32,231,42,198,53,186,57,196,64,194,28,253,17,259"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="QUADS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="97,353,82,371,80,349,80,326,83,294,89,341"
        group="quads"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Knee_Front"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="178,357,194,376,194,387,188,399,176,398,171,384"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="QUADS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="193,291,198,318,198,358,195,371,180,353,189,341"
        group="quads"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="QUADS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="172,273,175,259,181,246,189,262,191,288,184,340,177,351,170,329,169,287,190"
        group="quads"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="QUADS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="163,371,153,330,166,293,167,333,174,356,171,373,171"
        group="quads"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Rectus_Abdominis"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="124,158,136,154,137,179,136,221,135,277,126,268,117,238,117,206,118,172"
        group="abs"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Brachioradialis"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="224,185,221,194,213,193,250,255,262,260,246,233,237,201,186"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Biceps_Brachii_Short_Head"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="187,150,187,165,203,192,207,186,202,179"
        group="biceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Flexor_Digitorum"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="207,191,207,204,214,220,226,234,243,262,249,258"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Biceps_Brachii_Long_Head"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="192,135,189,148,204,176,217,190,220,183,210,150"
        group="biceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Flexor_Digitorum"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="34,262,50,236,63,220,70,203,69,190,29,256"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Biceps_Brachii_Short_Head"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="72,184,90,150,90,163,73,193"
        group="biceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Head_Back"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="448,6,437,8,425,19,424,36,435,53,460,53,468,38,469,17,460,9"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Trapezius"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="434,57,441,57,440,96,441,158,419,131,412,102,402,92,421,84,432,70"
        group="back"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Trapezius"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="452,57,460,57,462,70,472,83,491,92,481,101,474,131,452,158,454,96"
        group="back"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Deltoids_Back"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="398,93,383,98,370,110,372,132,386,122,393,115"
        group="shoulders"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Deltoids_Back"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="496,93,513,99,523,111,521,132,505,121,499,112"
        group="shoulders"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Latissimus_Dorsi"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="402,97,395,121,396,136,409,183,440,173,440,162,415,133,408,103"
        group="back"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Latissimus_Dorsi"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="491,97,498,122,497,138,484,183,453,173,453,162,478,134,485,104"
        group="back"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Triceps_Lateral"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="392,123,371,137,363,176,368,198,380,156,392,137"
        group="triceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Triceps_Lateral"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="502,124,522,137,531,178,525,199,512,154,501,137"
        group="triceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Triceps_Medial"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="9392,-118143,9392,-118167,9383,-118183,9374,-118188,9382,-118160"
        group="triceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Triceps_Medial"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="500,143,510,158,518,188,509,183,500,168"
        group="triceps"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Erector_Spinae"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="441,177,410,187,412,202,445,246,439,201"
        group="back"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Erector_Spinae"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="452,177,483,187,481,202,448,246,454,203"
        group="back"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Extensor_Digitorum"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="532,184,543,202,548,227,564,256,555,251,536,216,527,203"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Flexor_Carpi"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="520,193,511,189,515,205,543,250,548,262,551,252"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Extensor_Digitorum"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="361,184,350,203,345,226,329,256,338,251,358,214,366,201"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Flexor_Carpi"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="373,193,381,189,378,204,351,248,345,261,341,252"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="GLUTES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="434,240,400,261,399,285,403,302,440,291,445,276"
        group="glutes"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="GLUTES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="459,239,449,275,452,290,489,302,493,286,492,261"
        group="glutes"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="GROINS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="442,295,434,295,426,301,435,345,443,325,444,310"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="GROINS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="451,294,460,296,468,302,458,345,451,326,449,310"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="HAMSTRINGS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="397,293,402,310,415,302,412,324,410,359,398,378,397,351,394,338,393,315"
        group="hamstrings"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="HAMSTRINGS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="497,292,492,309,479,302,483,327,485,359,496,378,497,353,500,340,502,316"
        group="hamstrings"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="HAMSTRINGS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="420,301,433,349,424,398,414,365,416,324"
        group="hamstrings"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="HAMSTRINGS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="474,301,478,326,480,366,470,398,461,350"
        group="hamstrings"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Left_Knee_Back"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="410,366,402,380,408,397,417,388"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="Right_Knee_Back"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="485,367,477,389,486,397,492,380"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="CALVES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="398,383,396,399,387,428,385,459,389,469,396,460,399,429,404,408,404,398"
        group="calves"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="CALVES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="417,394,412,400,407,410,402,430,400,457,409,476,420,454,421,403"
        group="calves"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="CALVES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="477,394,473,402,474,454,485,475,495,457,491,428,486,406"
        group="calves"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="CALVES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="495,383,499,402,507,427,509,459,504,468,499,461,495,428,489,401"
        group="calves"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="CALVES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="396,466,400,466,408,480,401,523,396,508,392,472"
        group="calves"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="CALVES"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="493,466,498,466,502,472,498,507,494,522,487,481"
        group="calves"
      />
      <Polygon
        handleSelectMuscle={handleSelectMuscle}
        id="PERONEALS"
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="390,484,395,521,390,528,387,518"
        group="calves"
      />
      <Polygon
        id="PERONEALS"
        handleSelectMuscle={handleSelectMuscle}
        hoveredGroup={hoveredGroup}
        setHoveredGroup={setHoveredGroup}
        points="504,482,499,521,503,528,508,517"
        group="calves"
      />
    </svg>
  );
};
