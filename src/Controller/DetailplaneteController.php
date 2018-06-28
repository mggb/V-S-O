<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DetailplaneteController extends Controller
{
    /**
     * @Route("/detailplanete", name="detailplanete")
     */
    public function index()
    {
        return $this->render('detailplanete.html.twig', [
            'controller_name' => 'DetailplaneteController',
        ]);
    }
}
