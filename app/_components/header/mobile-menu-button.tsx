import { Menu } from "lucide-react";

export const MobileMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button className="right-3 absolute" onClick={onClick}>
            <Menu size="24" />
        </button>
    );
}