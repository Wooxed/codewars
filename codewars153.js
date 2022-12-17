function findBall(scales) {
    for (let i = 1; i < 8; i++) {
        let leftPan = [i - 1];
        let rightPan = [8 - i];
        let w = scales.getWeight(leftPan, rightPan);

        if (w === -1) {// left pan is heavier
            return leftPan[0];
        }

        if (w === 1) {// right pan is heavier
            return rightPan[0];
        }
    }
}