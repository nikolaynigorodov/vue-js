<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DeskResource;
use App\Models\Desk;
use Illuminate\Http\Request;

class DeskController extends Controller
{
    public function getDesks()
    {
        $desks = DeskResource::collection(Desk::all());
        return response()->json($desks, 200);
    }
}
