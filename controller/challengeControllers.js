import { Challenge } from "../models/challenge1.js";

export const addNew = async (req, res) => {
    try {
        const {
            created,
            question1: { questionText: questionText1, tags: tags1, link1: link1_1, link2: link2_1, isComplete: isComplete1 },
            question2: { questionText: questionText2, tags: tags2, link1: link1_2, link2: link2_2, isComplete: isComplete2 },
            question3: { questionText: questionText3, tags: tags3, link1: link1_3, link2: link2_3, isComplete: isComplete3 },
            question4: { questionText: questionText4, tags: tags4, link1: link1_4, link2: link2_4, isComplete: isComplete4 }
        } = req.body;
        
        const savedChallenge = await Challenge.create({
            created,
            question1: { questionText: questionText1, tags: tags1, link1: link1_1, link2: link2_1, isComplete: isComplete1 },
            question2: { questionText: questionText2, tags: tags2, link1: link1_2, link2: link2_2, isComplete: isComplete2 },
            question3: { questionText: questionText3, tags: tags3, link1: link1_3, link2: link2_3, isComplete: isComplete3 },
            question4: { questionText: questionText4, tags: tags4, link1: link1_4, link2: link2_4, isComplete: isComplete4 }
        })
        res.status(201).json(savedChallenge);
           
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const all = async (req,res) => {
        try {
            const challenges = await Challenge.find();
            res.status(200).json(challenges);
        } catch (error) {
            res.status(500).json({ error: "Unable to fetch challenges from the database." });
        }
    };
