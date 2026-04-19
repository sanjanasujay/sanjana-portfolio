import mock03 from '../assets/images/nlp.jpg';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mockk.png';
import mock06 from '../assets/images/ml.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width={"80%"}/>
                <a href='https://github.com/sanjanasujay/document-intelligence-chatbot' target='_blank' rel="noreferrer">
                <h2>Document Intelligence Chatbot using RAG</h2></a>
                <p>Built an end-to-end Retrieval-Augmented Generation (RAG) pipeline using LangChain and OpenAI sAPI to enable natural language querying over custom PDF documents, reducing hallucinations by
grounding LLM responses in retrieved document context. Engineered a vector embedding pipeline using ChromaDB to chunk, embed, and index document content, enabling semantic search and accurate context retrieval for user queries with sub-second
response time.</p>
            </div>
             <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="80%"/>
                <a href='https://github.com/sanjanasujay/ai-support-triage' target='_blank' rel="noreferrer">
                <h2>AI-Powered Support Ticket Triage Backend </h2></a>
                <p>Reduced support triage by 60% by building an LLM-powered backend that classifies tickets, assigns
urgency, and auto-escalates low-confidence cases, improving routing accuracy and system reliability.</p>
            </div>
             <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="80%"/>
                <a href='https://github.com/sanjanasujay/distributed-systems-design-playground' target='_blank' rel="noreferrer">
                <h2>Distributed Systems Design Playground </h2></a>
                <p>Built an interactive platform for designing distributed system architectures and simulating traffic loads
and bottlenecks using a Go-based simulation engine.</p>
            </div>
            <div className="project"  >
               <img src={mock03} className="zoom" alt="thumbnail" width={"80%"}   />
                <a href="https://link.springer.com/chapter/10.1007/978-981-96-0165-3_11" target="_blank" rel="noreferrer">
                <h2>Translation of Indic Languages to English and vice-versa using NLP</h2></a>
                <p>Built a transformer-based neural machine translation model to translate multiple Indian languages to English and vice-versa. Integrated text-to-speech functionality to generate audio output of translations, enhancing accessibility for non-English speakers.</p>
                
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width={"80%"}/>
                <h2>Café Database Management System</h2>
                <p>Developed a full-stack food ordering website using HTML, CSS, JavaScript, PHP, MySQL with dynamic menu-based ordering, enabling real-time order tracking. Through optimized MySQL queries and schema design, ensured smooth transaction handling.</p>
            </div>
           
             <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="80%"/>
              <h2>Retail Analytics: A Multi-Model Approach to Demand Forecasting</h2>
                <p>Built and compared multiple models (Linear Regression, Decision Tree, Random Forest, XGBoost) to forecast daily product-level revenue 30 days ahead. Engineered time-series and calendar features to capture seasonality and festive effects, and performed scenario-based forecasting to quantify holiday-driven revenue uplift for inventory and promotion planning.</p>
            </div>
           
           
            
        </div>
    </div>
    );
}

export default Project;