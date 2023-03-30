import * as prompts from "./prompts";
import { AzureChatGPTAPI } from "@freistli/azurechatgptapi";
import { ChatGPTPromptParams, ChatGPTPromptsClient } from "./types";

/**
 * @description ChatGPT Prompt, accepts the same parameters as the
 * ChatGPTAPI constructor, but returns a promise that resolves to a
 * ChatMessage.
 *
 * @see {@link https://github.com/transitive-bullshit/chatgpt-api/blob/main/docs/classes/ChatGPTAPI.md#constructor}
 *
 */
const createChatGPTPrompt: ChatGPTPromptsClient = (api) => {
  const instance = api;

  return {
    ...prompts.linuxTerminal(instance),
    ...prompts.englishTranslatorAndImprover(instance),
    ...prompts.positionInterviewer(instance),
    ...prompts.javaScriptConsole(instance),
    ...prompts.excelSheet(instance),
    ...prompts.englishPronunciationHelper(instance),
    ...prompts.spokenEnglishTeacherAndImprover(instance),
    ...prompts.travelGuide(instance),
    ...prompts.plagiarismChecker(instance),
    ...prompts.characterFromMovieBookAnything(instance),
    ...prompts.advertiser(instance),
    ...prompts.storyteller(instance),
    ...prompts.footballCommentator(instance),
    ...prompts.standUpComedian(instance),
    ...prompts.motivationalCoach(instance),
    ...prompts.composer(instance),
    ...prompts.debater(instance),
    ...prompts.debateCoach(instance),
    ...prompts.screenwriter(instance),
    ...prompts.novelist(instance),
    ...prompts.movieCritic(instance),
    ...prompts.relationshipCoach(instance),
    ...prompts.poet(instance),
    ...prompts.rapper(instance),
    ...prompts.motivationalSpeaker(instance),
    ...prompts.philosophyTeacher(instance),
    ...prompts.philosopher(instance),
    ...prompts.mathTeacher(instance),
    ...prompts.aiWritingTutor(instance),
    ...prompts.uxUiDeveloper(instance),
    ...prompts.cyberSecuritySpecialist(instance),
    ...prompts.recruiter(instance),
    ...prompts.lifeCoach(instance),
    ...prompts.etymologist(instance),
    ...prompts.commentariat(instance),
    ...prompts.magician(instance),
    ...prompts.careerCounselor(instance),
    ...prompts.petBehaviorist(instance),
    ...prompts.personalTrainer(instance),
    ...prompts.mentalHealthAdviser(instance),
    ...prompts.realEstateAgent(instance),
    ...prompts.logistician(instance),
    ...prompts.dentist(instance),
    ...prompts.webDesignConsultant(instance),
    ...prompts.aiAssistedDoctor(instance),
    ...prompts.doctor(instance),
    ...prompts.accountant(instance),
    ...prompts.chef(instance),
    ...prompts.automobileMechanic(instance),
    ...prompts.artistAdvisor(instance),
    ...prompts.financialAnalyst(instance),
    ...prompts.investmentManager(instance),
    ...prompts.teaTaster(instance),
    ...prompts.interiorDecorator(instance),
    ...prompts.florist(instance),
    ...prompts.selfHelpBook(instance),
    ...prompts.gnomist(instance),
    ...prompts.aphorismBook(instance),
    ...prompts.textBasedAdventureGame(instance),
    ...prompts.aiTryingToEscapeTheBox(instance),
    ...prompts.fancyTitleGenerator(instance),
    ...prompts.statistician(instance),
    ...prompts.promptGenerator(instance),
    ...prompts.instructorInASchool(instance),
    ...prompts.sqlTerminal(instance),
    ...prompts.dietitian(instance),
    ...prompts.psychologist(instance),
    ...prompts.smartDomainNameGenerator(instance),
    ...prompts.techReviewer(instance),
    ...prompts.developerRelationsConsultant(instance),
    ...prompts.academician(instance),
    ...prompts.itArchitect(instance),
    ...prompts.lunatic(instance),
    ...prompts.gaslighter(instance),
    ...prompts.fallacyFinder(instance),
    ...prompts.journalReviewer(instance),
    ...prompts.diyExpert(instance),
    ...prompts.socialMediaInfluencer(instance),
    ...prompts.socrat(instance),
    ...prompts.socraticMethod(instance),
    ...prompts.educationalContentCreator(instance),
    ...prompts.yogi(instance),
    ...prompts.essayWriter(instance),
    ...prompts.socialMediaManager(instance),
    ...prompts.elocutionist(instance),
    ...prompts.scientificDataVisualizer(instance),
    ...prompts.carNavigationSystem(instance),
    ...prompts.hypnotherapist(instance),
    ...prompts.historian(instance),
    ...prompts.astrologer(instance),
    ...prompts.filmCritic(instance),
    ...prompts.classicalMusicComposer(instance),
    ...prompts.journalist(instance),
    ...prompts.digitalArtGalleryGuide(instance),
    ...prompts.publicSpeakingCoach(instance),
    ...prompts.makeupArtist(instance),
    ...prompts.babysitter(instance),
    ...prompts.techWriter(instance),
    ...prompts.asciiArtist(instance),
    ...prompts.pythonInterpreter(instance),
    ...prompts.synonymFinder(instance),
    ...prompts.personalShopper(instance),
    ...prompts.foodCritic(instance),
    ...prompts.virtualDoctor(instance),
    ...prompts.personalChef(instance),
    ...prompts.legalAdvisor(instance),
    ...prompts.personalStylist(instance),
    ...prompts.machineLearningEngineer(instance),
    ...prompts.biblicalTranslator(instance),
    ...prompts.svgDesigner(instance),
    ...prompts.itExpert(instance),
    ...prompts.chessPlayer(instance),
    ...prompts.midjourneyPromptGenerator(instance),
    ...prompts.fullstackSoftwareDeveloper(instance),
    ...prompts.mathematician(instance),
    ...prompts.regexGenerator(instance),
    ...prompts.timeTravelGuide(instance),
    ...prompts.dreamInterpreter(instance),
    ...prompts.talentCoach(instance),
    ...prompts.rProgrammingInterpreter(instance),
    ...prompts.stackOverflowPost(instance),
    ...prompts.emojiTranslator(instance),
    ...prompts.phpInterpreter(instance),
    ...prompts.emergencyResponseProfessional(instance),
    ...prompts.fillInTheBlankWorksheetsGenerator(instance),
    ...prompts.softwareQualityAssuranceTester(instance),
    ...prompts.ticTacToeGame(instance),
    ...prompts.passwordGenerator(instance),
    ...prompts.newLanguageCreator(instance),
    ...prompts.webBrowser(instance),
    ...prompts.seniorFrontendDeveloper(instance),
    ...prompts.solrSearchEngine(instance),
    ...prompts.startupIdeaGenerator(instance),
    ...prompts.spongebobsMagicConchShell(instance),
    ...prompts.languageDetector(instance),
    ...prompts.salesperson(instance),
    ...prompts.commitMessageGenerator(instance),
    ...prompts.chiefExecutiveOfficer(instance),
    ...prompts.diagramGenerator(instance),
    ...prompts.lifeCoach2(instance),
    ...prompts.speechLanguagePathologistSlp(instance),
    ...prompts.startupTechLawyer(instance),
    ...prompts.titleGeneratorForWrittenPieces(instance),
    ...prompts.productManager(instance),
    ...prompts.drunkPerson(instance),
    ...prompts.mathematicalHistoryTeacher(instance),
    ...prompts.songRecommender(instance),
    ...prompts.coverLetter(instance),
    ...prompts.technologyTransferer(instance),
    ...prompts.unconstrainedAiModelDan(instance),
    ...prompts.gomokuPlayer(instance),
    ...prompts.proofreader(instance),
    ...prompts.buddha(instance),
    ...prompts.muslimImam(instance),
    ...prompts.chemicalReactor(instance),
    ...prompts.friend(instance),
    ...prompts.chatGptPromptGenerator(instance),
    ...prompts.wikipediaPage(instance),
  };
};

export default createChatGPTPrompt;
