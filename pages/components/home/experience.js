import SeeMore from "@components/button/see-more";
import ListProjectMain from "../list-project";
import ListWorksMain from "../list-works";
import ListCommitteeMain from "../list-committee";

export default function HomeExperience() {
    return (
        <section className="experience">
            <h2 className="h2-title">EXPERIENCE</h2>
            <div className="outer">
                <div className="wrapper">
                    <div className="wrapper-fixed">
                        <div className="fixed">
                            <p className="desktop-only">WORKS</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <ListWorksMain />
                </div>
            </div>
            {/* <div className="outer">
                <div className="wrapper">
                    <div className="wrapper-fixed">
                        <div className="fixed">
                            <p className="desktop-only">PROJECTS</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <ListProjectMain />
                    <SeeMore />
                </div>
            </div>
            <div className="outer">
                <div className="wrapper">
                    <div className="wrapper-fixed">
                        <div className="fixed">
                            <p className="desktop-only">COMMITTTE</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <ListCommitteeMain />
                    <SeeMore />
                </div>
            </div> */}
        </section>
    );
}
