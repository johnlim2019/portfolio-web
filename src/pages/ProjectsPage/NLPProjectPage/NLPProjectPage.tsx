import { Card, Container, Image, Stack, Text, Title } from "@mantine/core"
import "../../../assets/containers.css"
import "../../../assets/titles.css"
import TopBar from "../../../components/TopBar/TopBar"
import { TopBarEnum } from "../../../enum/TopBarEnum"

function NLPProjectPage(): JSX.Element {


    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <Container className="responsiveContainer">
                <Stack align="center">
                    <Title className="homeTitleText2">Fake News Detection</Title>
                    <Text>
                        This project was based on the WELFake dataset which presented the Fake News Detection as a binary supervised learning problem.
                        The project's effectiveness is based on the accuracy of the binary prediction.
                    </Text>
                    <Title className="homeTitleText3">Problem Statement</Title>
                    <Text>
                        How might we identify fake news articles?
                    </Text>
                    <Title className="homeTitleText3">Feature Engineering and Classification</Title>
                    <Text>
                        To get the best results, we explored various methods of feature engineering: Bag-of-Words, Writing Pattern/Content Features, and Word Embedding.
                    </Text>
                    <Text>
                        We explored multiple models such as the Multinomial Naive Bayes Classifier, LSTM, GRU, CNN, and FFNN. Ultimately we used a two-stage model, where all the models contribute to a final prediction via an ensemble model. This model architecture captures both the semantic (from Word Embedding) and non-semantic data (Writing Pattern).
                    </Text>
                    <Card bg="gray.2">
                        <Image src="/nlp-welfake/ensemble-model.png"></Image>
                    </Card>
                    <Title className="homeTitleText2">Dataset</Title>
                    <Text>
                        The WELFake dataset combines 4 popular news datasets: Kaggle, McIntire, Reuters, and Buzzfeed Political. The dataset has 72,134 rows with binary classification labels with 35,028 real and 37,106 fake news. The dataset contains three columns: Title (about the text news heading); Text (about the news content); and Label (1 = fake and 0 = real).
                    </Text>
                    <Text>
                        We split the data into 4 main subsets: Base Model Training (40%) (BOW FFNN, Content FFNN, LSTM, GRU, CNN), Ensemble Training (40%), Test (10%) and Validation (10%) sets.
                    </Text>
                    <Text>
                        During our earlier experimentation to find the best configuration for the base models, we used a slightly different split: Training (80%), Validation(10%), and Test (10%).
                    </Text>
                    <Title className="homeTitleText2">Writing Pattern Feature Engineering</Title>
                    <Text>
                        We describe content features as those that track the writing pattern of a text. This follows the WELFake paper that used similar features to inform their model. The features we created fall into four categories:
                    </Text>
                    <Text>
                        <b>Parts of speech</b> capture the frequency of adverbs, nouns, adjectives, conjunctions, and verbs. We also track the average rate of each part of speech per sentence. To generate the parts of speech features, we first tokenise each document into a single-word list, removing all punctuation characters. Then we used the NLTK library pos_tag method to label each token. Then we count each token to generate the parts of speech character.
                    </Text>
                    <Text>
                        <b>Sentence structure</b> tracks the number of long sentences (&gt; 10 words), short sentences, total sentences, and words per sentence. This is done in a separate preprocessing step. The document needs to be tokenised into sentences, we split each document using the following punctuation characters: ? . ! Then each sentence string is tokenised into words. This creates a single-order nested list. Then we can calculate each sentence's length, the median words per sentence, the variance of words per sentence, and the number of long and short sentences (10 words).
                    </Text>
                    <Text>
                        <b>Character Count.</b> We count the number of capital letters and the number of special characters (not alphanumeric) per document. We added these features based on their ability to classify texts in the bag of words model.
                    </Text>


                </Stack>
            </Container >


        </>
    )
}

export default NLPProjectPage
