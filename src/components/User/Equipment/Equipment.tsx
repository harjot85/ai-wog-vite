import { useEffect, useState } from 'react';
import { InputText } from '../../../ui/Input/input';

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
        <div className="flex flex-col gap-4 items-center justify-center w-full max-w-md mx-auto p-4">
            <InputText
                name="equipment"
                label="What Equipment do you have? (Separate by comma)"
                placeholder=""
                size="lg"
                className="text-sm"
                onChange={handleEquipmentChange}
            />
        </div>
    );
};

export default Equipment;
