import { useState, useEffect } from "react";
import OperationCard from "./OperationCard";
import splitIcon from "../../assets/icon/split.svg";
import mergeIcon from "../../assets/icon/merge.svg";
import removeIcon from "../../assets/icon/remove.svg";
import extractIcon from "../../assets/icon/extract.svg";
import watermarkIcon from "../../assets/icon/watermark.svg";
import summaryIcon from "../../assets/icon/summary.svg";
import { useLanguage } from "../../contexts/LanguageContext";

function OperationGrid({ onSelectOperation }) {
    const { t } = useLanguage();

    const defaultBackground = "linear-gradient(180deg, rgba(18, 57, 115, 1) 0%, rgba(20, 27, 38, 1) 45%)";
    const [background, setBackground] = useState(defaultBackground);
    const [locked, setLocked] = useState(false);

    useEffect(() => {
        document.body.style.background = background;
    }, [background]);

    // Sblocca lo sfondo quando cambia pagina, dopo un delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLocked(false);
        }, 500); // durata della transizione
        return () => clearTimeout(timeout);
    }, [onSelectOperation]);

    const handleSelect = (page, bg) => {
        setLocked(true);
        setBackground(bg);
        onSelectOperation(page);
    };

    return (
        <div className="grid">
            <OperationCard
                title={t('mergeTitle')}
                desc={t('mergeDesc')}
                icon={mergeIcon}
                onClick={() => handleSelect('merge', "linear-gradient(180deg, rgb(255, 115, 18) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseEnter={() => !locked && setBackground("linear-gradient(180deg, rgb(255, 115, 18) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseLeave={() => !locked && setBackground(defaultBackground)}
            />
            <OperationCard
                title={t('splitTitle')}
                desc={t('splitDesc')}
                icon={splitIcon}
                onClick={() => handleSelect('split', "linear-gradient(180deg, rgb(44, 115, 18) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseEnter={() => !locked && setBackground("linear-gradient(180deg, rgb(44, 115, 18) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseLeave={() => !locked && setBackground(defaultBackground)}
            />
            <OperationCard
                title={t('removeTitle')}
                desc={t('removeDesc')}
                icon={removeIcon}
                onClick={() => handleSelect('remove', "linear-gradient(180deg, rgb(255, 50, 50) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseEnter={() => !locked && setBackground("linear-gradient(180deg, rgb(255, 50, 50) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseLeave={() => !locked && setBackground(defaultBackground)}
            />
            <OperationCard
                title={t('extractTitle')}
                desc={t('extractDesc')}
                icon={extractIcon}
                onClick={() => handleSelect('extract', "linear-gradient(180deg, rgb(115, 18, 115) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseEnter={() => !locked && setBackground("linear-gradient(180deg, rgb(115, 18, 115) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseLeave={() => !locked && setBackground(defaultBackground)}
            />
            <OperationCard
                title={t('watermarkTitle')}
                desc={t('watermarkDesc')}
                icon={watermarkIcon}
                onClick={() => handleSelect('watermark', "linear-gradient(180deg, rgb(18, 102, 115) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseEnter={() => !locked && setBackground("linear-gradient(180deg, rgb(18, 102, 115) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseLeave={() => !locked && setBackground(defaultBackground)}
            />
            <OperationCard
                title={t('summaryTitle')}
                desc={t('summaryDesc')}
                icon={summaryIcon}
                onClick={() => handleSelect('summary', "linear-gradient(180deg, rgb(172, 161, 13) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseEnter={() => !locked && setBackground("linear-gradient(180deg, rgb(172, 161, 13) 0%, rgba(20, 27, 38, 1) 45%)")}
                onMouseLeave={() => !locked && setBackground(defaultBackground)}
            />
        </div>
    );
}

export default OperationGrid;
