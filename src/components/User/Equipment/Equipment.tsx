import { useEffect, useState } from 'react';

interface Equipment {
    setEquipment: (equipment: string[]) => void;
}

const Equipment = ({ setEquipment }: Equipment) => {
    const [equipmentState, setEquipmentState] = useState<string[]>([]);

    const handleEquipmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEquipmentState([e.target.value]);
    };

    useEffect(() => {
        setEquipment(equipmentState);
    }, [equipmentState, setEquipment]);

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <label className="dui-label">
                <span className="dui-label">
                    What Equipment do you have? (Separate by comma)
                </span>
            </label>
            <input
                name="equipment"
                type="text"
                placeholder=""
                className="dui-input"
                onChange={handleEquipmentChange}
            />
        </div>
    );
};

export default Equipment;
