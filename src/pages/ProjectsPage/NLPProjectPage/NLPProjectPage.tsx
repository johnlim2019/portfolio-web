import { Card, Center, Container, Image, List, Stack, Text, Title } from "@mantine/core"
import "../../../assets/containers.css"
import "../../../assets/titles.css"
import TopBar from "../../../components/TopBar/TopBar"
import { TopBarEnum } from "../../../enum/TopBarEnum"
import styles from "./NLPProjectPage.module.css"

function NLPProjectPage(): JSX.Element {


    return (
        <>
            <TopBar currentPage={TopBarEnum.HOME} />
            <Container className="responsiveContainer">
                <Stack align="center" gap="2em">
                    <Title className="homeTitleText2">Fake News Detection</Title>
                    <Text className="justifiedParagraph">
                        This was a group project was based on the WELFake <a className={styles.link} href="https://www.kaggle.com/datasets/saurabhshahane/fake-news-classification">dataset</a> which presented the Fake News Detection as a binary supervised learning problem.
                        The project's effectiveness is based on the accuracy of the binary prediction.
                    </Text>
                    <Title className="homeTitleText3">Problem Statement</Title>
                    <Text className="justifiedParagraph">
                        How might we identify fake news articles?
                    </Text>
                    <Title className="homeTitleText3">Feature Engineering and Classification</Title>
                    <Text className="justifiedParagraph">
                        To get the best results, we explored various methods of feature engineering: Bag-of-Words, Writing Pattern/Content Features, and Word Embedding.
                    </Text>
                    <Text className="justifiedParagraph">
                        We explored multiple models such as the Multinomial Naive Bayes Classifier, LSTM, GRU, CNN, and FFNN. Ultimately we used a two-stage model, where all the models contribute to a final prediction via an ensemble model. This model architecture captures both the semantic (from Word Embedding) and non-semantic data (Writing Pattern).
                    </Text>
                    <Card bg="gray.2">
                        <Image src="/nlp-welfake/ensemble-model.png"></Image>
                    </Card>
                    <Title className="homeTitleText2">Dataset</Title>
                    <Text className="justifiedParagraph">
                        The WELFake dataset combines 4 popular news datasets: Kaggle, McIntire, Reuters, and Buzzfeed Political. The dataset has 72,134 rows with binary classification labels with 35,028 real and 37,106 fake news. The dataset contains three columns: Title (about the text news heading); Text (about the news content); and Label (1 = fake and 0 = real).
                    </Text>
                    <Text className="justifiedParagraph">
                        We split the data into 4 main subsets: Base Model Training (40%) (BOW FFNN, Content FFNN, LSTM, GRU, CNN), Ensemble Training (40%), Test (10%) and Validation (10%) sets.
                    </Text>
                    <Text className="justifiedParagraph">
                        During our earlier experimentation to find the best configuration for the base models, we used a slightly different split: Training (80%), Validation(10%), and Test (10%).
                    </Text>
                    <Title className="homeTitleText2">Content Feature Engineering</Title>
                    <Text className="justifiedParagraph">
                        We describe content features as those that track the writing pattern of a text. This follows the WELFake paper that used similar features to inform their model. The features we created fall into four categories:
                    </Text>
                    <Text className="justifiedParagraph">
                        <b>Parts of speech</b> capture the frequency of adverbs, nouns, adjectives, conjunctions, and verbs. We also track the average rate of each part of speech per sentence. To generate the parts of speech features, we first tokenise each document into a single-word list, removing all punctuation characters. Then we used the NLTK library pos_tag method to label each token. Then we count each token to generate the parts of speech character.
                    </Text>
                    <Text className="justifiedParagraph">
                        <b>Sentence structure</b> tracks the number of long sentences (&gt; 10 words), short sentences, total sentences, and words per sentence. This is done in a separate preprocessing step. The document needs to be tokenised into sentences, we split each document using the following punctuation characters: ? . ! Then each sentence string is tokenised into words. This creates a single-order nested list. Then we can calculate each sentence's length, the median words per sentence, the variance of words per sentence, and the number of long and short sentences (10 words).
                    </Text>
                    <Text className="justifiedParagraph">
                        <b>Readability indexes.</b>They use sentence length, syllable count, and word length to estimate a text's difficulty. The final rating produced is a float value. We used py-readability-index’s implementation. The document string is fed into the method to generate the different indexes. We calculated the following indexes: Dale Chall, Gunning Fog, Flesch Kincaid, SMOG, and automatic readability. If there are insufficient words in the text, the method returns a NaN value.                    </Text>
                    <Text className="justifiedParagraph">
                        <b>Character Count.</b> We count the number of capital letters and the number of special characters (not alphanumeric) per document. We added these features based on their ability to classify texts in the bag of words model.
                    </Text>
                    <Title className="homeTitleText3">Cleaning up features</Title>
                    <Text className="justifiedParagraph">
                        Not all features we create contribute to differentiating the two classes. To reduce the noise of the dataset, we need to reduce the number of features. We ran a linear correlation test between each feature. The following table indicates the features that have higher than 0.90 collinearity. Removing features with high collinearity reduces complexity without reducing the variance of the dataset. Using similar correlated features can make the model highly sensitive to small changes in these features. It also can lead to overfitting.
                    </Text>
                    <Card bg="gray.2">
                        <Center>
                            <Title className="homeTitleText2" c="black"> Heatmap of collinearity between content features</Title>
                        </Center>
                        <Image src="/nlp-welfake/colinear-graph.png"></Image>
                    </Card>
                    <Text className="justifiedParagraph">
                        Collinearity between variables should be avoided.
                    </Text>
                    <List type="ordered">
                        <List.Item>They can make the model susceptible to unpredictable and unstable changes with small changes in the training data.</List.Item>
                        <List.Item>Collinearity can exacerbate overfitting in neural networks. The network may learn spurious correlations between highly correlated features and the target variable, leading to poor generalisation performance on unseen data.</List.Item>
                    </List>
                    <Text className="justifiedParagraph">
                        So we decided to drop the following features:
                    </Text>
                    <List type="ordered">
                        <List.Item>nouns</List.Item>
                        <List.Item>adjectives</List.Item>
                        <List.Item>adverbs</List.Item>
                        <List.Item>num_long_sentences</List.Item>
                        <List.Item>sum_short_sentences</List.Item>
                    </List>
                    <Text className="justifiedParagraph">
                        The readability index features require a given word count to work. So different readability indexes would result in the loss of dataset size.
                    </Text>
                    <List ta="left">
                        <List.Item>Smog dataset loss: 72134 to 16994</List.Item>
                        <List.Item>Dale Chall and Automated Readability loss: 72134 to 64482</List.Item>
                    </List>
                    <Text className="justifiedParagraph">
                        This amounts to at least 10% of the dataset having a NaN value for that feature. As we only have a few features, the vector is short. This means that the missing data can significantly impact the neural network training. Hence we decided to drop the readability indexes. Lastly, each feature is standardised.
                    </Text>
                    < Text className="justifiedParagraph">
                        We final features used were: <i>proper_nouns conjunctions, verbs_third_person, verbs_others, words_per_sentence_variance, words_per_sentence_median, num_of_sentences, adverbs_rate, nouns_rate, proper_nouns_rate, adjectives_rate, conjunctions_rate, verbs_third_person_rate, verbs_others_rate, special_char, cap_char, cap_char_rate, Special_char_rate,</i>
                    </Text>
                    <Title className="homeTitleText2">Content Feature FFNN model</Title>
                    <List type="ordered">
                        <List.Item>In experimentation we used the unseen test dataset to measure our accuracy</List.Item>
                        <List.Item>We used a sigmoid activation function in the prediction layer due to the binary classification problem.</List.Item>
                        <List.Item>Given the low dimensionality of the data, we find that a lower dropout value provides better results. </List.Item>
                        <List.Item>Through experimentation we settled on a hidden layer structure of 512 neurons, ReLU activation function.</List.Item>
                        <List.Item>We also identified Adam optimiser to be the most suitable.</List.Item>
                    </List>
                    <Text className="justifiedParagraph">
                        The best combination produced a 82.17% accuracy.
                    </Text>
                    <Title className="homeTitleText2">TF-IDF FFNN model</Title>
                    <List type="ordered">
                        <List.Item>We used the Tensorflow text vectoriser to create our input. The vocabulary was generated using the top 2000 most frequent terms.</List.Item>
                        <List.Item>For this sub model, we have a much longer and sparse vector. Given the low dimensionality of the data, we find that a lower dropout value provides better results.</List.Item>
                        <List.Item>Through experimentation we settled on a hidden layer structure of 512 neurons, ReLU activation function.</List.Item>
                        <List.Item>We also identified Adam optimiser to be the most suitable.</List.Item>
                    </List>
                    <Text className="justifiedParagraph">
                        The best combination produced a 96.7% accuracy.
                    </Text>
                    <Title className="homeTitleText2">Word Embedding preprocessing</Title>
                    < Text className="justifiedParagraph">
                        Each document was tokenised into words. We used TensorFlow’s Tokeniser object. It does the following preprocessing steps: <i>Filters out symbols, new lines, and tab spaces. Lowercase words. Split into tokens by single whitespace</i>
                    </Text>
                    < Text className="justifiedParagraph">
                        Then use the NLTK stopword library to remove the stop words from the document. Then we used the TensorFlow word embedding library to convert each word into a 100-long dense vector. To handle padding and truncation, we checked the document length of distribution of each document.
                    </Text>
                    <Card bg="gray.2">
                        <Center>
                            <Title className="homeTitleText2" c="black"> Histogram of document length</Title>
                        </Center>
                        <Image src="/nlp-welfake/doc-length.png"></Image>
                        <Center>
                            <Text c="black" className="homeTitleText3">
                                Median: 243, 95th percentile: 812, 97.265th percentile: 1000
                            </Text>
                        </Center>
                    </Card>
                    <Text className="justifiedParagraph">
                        For our testing, we started with sequences at 812 length, 95th percentile, of document length. This sequence length balances preserving sequence data and reducing the influence of very long edge cases on the training. Experimentation led us to increase the sequence length to increase the overall test accuracy. Our final sequence length chosen was 1000, the 97.265 percentile of document length.
                    </Text>
                    <Title className="homeTitleText2">Explored Neural Networks</Title>
                    <Title className="homeTitleText3">Convolutional Neural Network</Title>
                    <Text className="justifiedParagraph">
                        We have implemented a model using the Convolutional Neural Network Architecture to process our input news text. The Convolution layers in the CNN model act as filters scanning the input text data with different window sizes (which are defined in the filter size). In this model, we have used a 1D convolution layer since the text is in 1 dimension, and the convolution filtering is done by sliding the filter kernel of size 10 across the entire sequence to detect patterns and understand the relationship between the words in the text data.
                    </Text>
                    <Text className="justifiedParagraph">
                        In this model, we ensured that we created a deep neural network that was able to capture complex patterns and at the same time did not overfit the training data. Hence to prevent overfitting, we have used a dropout of 20% which means that 20% of the neurons will be set to 0. This allows the model to generalize the features learnt instead of heavily relying on the information from previous neurons.
                    </Text>
                    <Text className="justifiedParagraph">
                        The best combination produced a 98.41% accuracy.
                    </Text>
                    <Title className="homeTitleText3">Gated Recurrent Neural Network</Title>
                    <Text className="justifiedParagraph">
                        We have implemented a model using Gated Recurrent Neural Network(GRU) Architecture to process the news dataset and make binary predictions. GRUs are designed to process sequential data and they are an improvement from RNNs as they are better at alleviating the vanishing issue faced by RNNs as we train deeper neural networks. The GRU uses a gated mechanism to selectively update and remember temporal and long-range dependencies. Hence it would be able to process long sequences with high accuracy as compared to RNNs.
                    </Text>
                    <Text className="justifiedParagraph">
                        The best combination produced a 98.46% accuracy.
                    </Text>
                    <Title className="homeTitleText3">Long Short Term Neural Network</Title>
                    < Text className="justifiedParagraph">
                        We have implemented a Long Short Term Neural Network(LSTM) model to process the news Text. LSTM is a neural network architecture that is an improvement from RNN as well, LSTM can process sequential data such as news textual data from our dataset. RNN is only able to remember short-term information because as the layers go deeper it has vanishing gradient issues and hence forgetting the information from the earlier part of the sentence, hence LSTM is designed such that it alleviates the gradient vanishing and can capture the long-range dependencies. LSTM has three gates which control the information flow in the cell state for each timestep ensuring that we can control how much past information to remember and how much present information to include. Through this, the model will be able to still model the long-term dependencies between the words in our sequence.
                    </Text>
                    <Text className="justifiedParagraph">
                        The best combination produced a 97.59% accuracy.
                    </Text>
                    <Title className="homeTitleText2">Ensemble Model</Title>
                    <Text className="justifiedParagraph">
                        We implemented a stacked ensemble model to combine the predictions from the best-scoring neural networks that we had previously explored. By combining predictions, the ensemble model can learn from a larger variety of features and achieve a higher evaluation score. Our stacked ensemble model consists of the base models as mentioned and the meta model that receives the predictions from the base models. Logistic regression was chosen over other commonly used models for the meta-model as it is better suited to our goal of binary classification.
                    </Text>
                    <Card bg="gray.2">
                        <Center>
                            <Title className="homeTitleText2" c="black">General Architecture of Stacked Ensemble Model</Title>
                        </Center>
                        <Image src="/nlp-welfake/ensemble-model-diagram.png"></Image>
                    </Card>
                    <Text className="justifiedParagraph">
                        The data was preprocessed as above (for the individual neural networks). The data set was split into a 40% training set for the base models, a 40% training set for the meta-model, a 10% validation set, and a 10% testing set. This was to ensure there would be enough training sets for the base and meta models to prevent having to reuse sets which could lead to a data leakage from the training of the base models to the meta model.
                        The function fit_stacked_models was used to get the predictions from the trained base models on the unseen second training set. The X predictions were then used to fit the logistic regression along with the y labels.
                    </Text>
                    <Text>
                        In our experimentation we found that using all 5 sub-models provided the best accuracy of 97.03%.
                    </Text>
                    <Text className="justifiedParagraph">
                        As expected, the accuracy of the ensemble model generally increased with the number of base models making predictions. There was a significant increase in accuracy from iteration 1 to 2 with the addition of the FFNN model compared to the BOW model in iteration 4. We can infer that the FFNN model has learned different features that the LSTM, GRU, and CNN models had not captured, which will contribute to a larger increase in the adaptability of the ensemble on unseen data and hence its accuracy.
                    </Text>
                    <Title className="homeTitleText2">Comparison BERT Model</Title>
                    <Text className="justifiedParagraph">
                        We implemented a Bidirectional Encoder from Transformers (BERT) model to use as the state-of-the-art comparison with our final ensemble model.
                    </Text>
                    <Text className="justifiedParagraph">
                        The preprocessing of the data was done similarly to that of the models above with combined title and text input. We replaced null values with “Null” instead of removing the empty rows so that when splitting the dataset, it will be split the same way as the rest of the models. However, with BERT, we used the max length allowed, which is 512 with padding to the max length and truncating the excess.
                    </Text>
                    <Text className="justifiedParagraph">
                        We used the model, google/bert_uncased_L-2_H-128_A-2, provided in the homework, with hidden dropout probability 0.1 and 2 training epochs and tuned it with different learning rates.
                    </Text>
                    <Text className="justifiedParagraph">
                        The best results were with a learning rate of 0.0005 giving a 99.17% accuracy.
                    </Text>
                    <Text className="justifiedParagraph">
                        In conclusion, our experimentation has shed light on the remarkable capabilities of the BERT transformer model, which stands as the current state-of-the-art in natural language processing. By constructing an ensemble model and fine-tuning its parameters, its accuracy is competitive with the state-of-the-art BERT model. With an accuracy rate of 97%, our ensemble model showcases the potential for alternative approaches to yield competitive results in NLP tasks.
                    </Text>
                    <Text className="justifiedParagraph">
                        While BERT remains the benchmark against which other models are measured. As we continue to explore new techniques and methodologies, our work contributes to the broader conversation surrounding the best practices in natural language processing. Through collaboration and experimentation, we strive to push the boundaries of what is possible and drive further advancements in the field.
                    </Text>

                </Stack>
            </Container >


        </>
    )
}

export default NLPProjectPage
