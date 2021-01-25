import React from 'react';
import { motion } from "framer-motion";
import '../styles/apps/Playground.scss';
import Draggable from 'react-draggable';

/**
 * This component is for testing framer stuff
 */

export default function Playground() {
    return (
        <div className="playground">
            <Draggable>
                <div className="container">
                    <motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            loop: Infinity,
                            repeatDelay: 1
                        }}
                    />
                </div>
            </Draggable>
        </div>
    )
}
