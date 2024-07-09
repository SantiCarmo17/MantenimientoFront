import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Forms } from '@/layout/Forms';
import React, { useMemo, useState } from 'react';


export const Checklist = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  const filteredEquipment = useMemo(() => {
    return [
        { id: "desktop", name: "Desktop", location: "office", type: "desktop" },
        { id: "laptop", name: "Laptop", location: "office", type: "laptop" },
        { id: "monitor", name: "Monitor", location: "office", type: "monitor" },
        { id: "router", name: "Router", location: "remote", type: "networking" },
        { id: "switch", name: "Switch", location: "warehouse", type: "networking" },
        { id: "firewall", name: "Firewall", location: "remote", type: "networking" },
        { id: "web-server", name: "Web Server", location: "data-center", type: "server" },
        { id: "app-server", name: "Application Server", location: "data-center", type: "server" },
        { id: "db-server", name: "Database Server", location: "data-center", type: "server" },
        { id: "printer", name: "Printer", location: "office", type: "printer" },
    ].filter((item) => {
        if(selectedLocation === 'all' && selectedType === 'all') return true;
        if(selectedLocation === item.location && selectedType === 'all') return true;
        if(selectedLocation ===  'all' && selectedType === item.location) return true;
        if (selectedLocation && item.location !== selectedLocation) return false;
        if (selectedType && item.type !== selectedType) return false;
        return true;
    });
}, [selectedLocation, selectedType]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedItems(prevSelectedItems => {
        if (checked) {
            return [...prevSelectedItems, id];
        } else {
            return prevSelectedItems.filter(itemId => itemId !== id);
        }
    });
    if (!checked) {
        setSelectAll(false);
    }
  };

  const handleSelectAllChange = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setSelectedItems(checked ? filteredEquipment.map(item => item.id) : []);
};

  return (
    <Forms>

    <Card className="col-span-2 lg:col-span-1 mt-8">
                <CardHeader>
                    <CardTitle>Equipment Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="equipment">Select Equipment</Label>
                            <div className="flex gap-2">
                                <Select id="equipment" value={selectedLocation} onValueChange={setSelectedLocation}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>
                                    <SelectContent className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                                        <SelectItem value="all">All Locations</SelectItem>
                                        <SelectItem value="office">Office</SelectItem>
                                        <SelectItem value="warehouse">Warehouse</SelectItem>
                                        <SelectItem value="remote">Remote</SelectItem>
                                        <SelectItem value="data-center">Data Center</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select id="equipment-type" value={selectedType} onValueChange={setSelectedType}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                                        <SelectItem value="all">All Types</SelectItem>
                                        <SelectItem value="desktop">Desktop</SelectItem>
                                        <SelectItem value="laptop">Laptop</SelectItem>
                                        <SelectItem value="monitor">Monitor</SelectItem>
                                        <SelectItem value="networking">Networking</SelectItem>
                                        <SelectItem value="server">Server</SelectItem>
                                        <SelectItem value="printer">Printer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Equipment Maintenance Status</Label>
                            <div className="grid gap-2">
                                <input type="checkbox" id="selectAll" checked={selectAll} onChange={handleSelectAllChange} />
                                <label htmlFor="selectAll">Select All</label>
                                </div>
                            <div className="grid gap-2">
                                {filteredEquipment.map((item) => (
                                    <div key={item.id} className="flex items-center gap-2">
                                        <li key={item.id}>
                                        <input type="checkbox" id={item.id} checked={selectedItems.includes(item.id)} onChange={handleCheckboxChange} />
                                        <label htmlFor={item.id}>{item.name}</label>
                                        </li>
                                    </div>
                                ))}
                            </div>
                            Selected items: {selectedItems.join(', ')}
                        </div>
                    </div>
                </CardContent>
            </Card>
    {/* <div>
      <div>
        <input type="checkbox" id="selectAll" onChange={handleSelectAllChange} />
        <label htmlFor="selectAll">Select All</label>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" id={item.id} checked={selectedItems.includes(item.id)} onChange={handleCheckboxChange} />
            <label htmlFor={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
      Selected items: {selectedItems.join(', ')}
    </div> */}
    </Forms>
  );
};
