    import React from "react";
    import { useNavigate } from "react-router-dom";
    import { motion } from "framer-motion";
    import RocketImage from "../../assets/images/rocket-man.png";
    import "./Launch.css";

    const RocketLaunch: React.FC = () => {
        const navigate = useNavigate();
    return (
        <div className="launch-container">
        {/* Earth at the bottom */}
        <div className="earth-curvature"></div>

        <div><button className="launch-button" onClick={() => navigate('/subscriptions-solar-system')}>Launch Rocket</button></div>

        {/* Rocket */}
        <motion.img
            src={RocketImage}
            alt="Rocket"
            className="rocket"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
            y: [-50, -500],          // vertical motion
            x: [0, 100],             // small horizontal curve
            rotate: [0, 15, -15, 0], // slight wiggling for realism
            }}
            transition={{
            duration: 6,
            ease: "easeInOut",
            }}
        />
        </div>
    );
    };

    export default RocketLaunch;
